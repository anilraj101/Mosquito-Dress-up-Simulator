import styles from "./styles";

const ImagePicker = ({ onSelectImage }) => {
  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (
          typeof reader?.result === "string" ||
          reader?.result instanceof String
        ) {
          onSelectImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={styles.uploadButtonContainer}>
      <label for="file-upload" style={styles.fileUploadInput}>
        Upload Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImagePicker;
