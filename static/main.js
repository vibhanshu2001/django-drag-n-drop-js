Dropzone.autoDiscover = false;
const myDropzone = new Dropzone("#my-dropzone",{
    url: "upload/",
    maxFiles: 3,
    maxFilesize: 2,
    acceptedFiles: '.png, .jpg, .svg'
})