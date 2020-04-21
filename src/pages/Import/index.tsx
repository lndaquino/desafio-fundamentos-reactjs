import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  async function handleUpload(): Promise<void> {
    if (!uploadedFiles.length) {
      console.log('Sem arquivos para enviar');
      return;
    }

    uploadedFiles.map(async (uploadedFile) => {
      const data = new FormData();
      const { file } = uploadedFile;
      data.append('file', file);

      try {
        await api.post('/transactions/import', data);
      } catch (err) {
        console.log(err.response.error);
      }
    });

    history.go(0);
  }

  function submitFile(files: File[]): void {
    const newFiles = files.map((file) => {
      const newFile = {
        file,
        name: file.name,
        readableSize: file.size.toString(),
      };
      return newFile;
    });
    setUploadedFiles(newFiles);
  }

  return (
    <>
      <Header size="small" activePage="import" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
