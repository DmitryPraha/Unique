import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target)
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="text"
                accept={accept}
                style={{display: "none"}}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
