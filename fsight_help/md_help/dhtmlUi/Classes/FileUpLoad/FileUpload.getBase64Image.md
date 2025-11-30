# FileUpload.getBase64Image

FileUpload.getBase64Image
-


# FileUpload.getBase64Image


## Синтаксис


getBase64Image(callback: PP.Delegate);


## Параметры


callback.
 Обработчик события загрузки. Доступный аргумент: Message
 - base64-представление загруженного изображения.


## Описание


Метод getBase64Image загружает
 изображение.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [FileUpload](../../Components/FileUpload/FileUpload.htm) c
 наименованием «fileUpload» (см. «[Конструктор
 FileUpload](Constructor_FileUpload.htm)»). Добавим изображение в загрузчик файлов:


![](FileUpload_getBase64Image.png)


Далее загрузим указанное изображение и получим его base64-представление:


// Загружаем изображение
fileUpload.getBase64Image(function(sender, args) {
    if(args) {
        var base64Image = args.Message;
        console.log("Загруженное изображение:");
        console.log(base64Image);
    }
});
В результате выполнения примера в консоль браузера было выведено base64-представление
 загруженного изображения:


Загруженное изображение:


data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+YAAAMBCAIAAADtQzlKAAAAAXNSR…


MABCAAAQhAAAIQgACSHR+AAAQgAAEIQAACEIDApgn8/wHwLnNiHwraeAAAAABJRU5ErkJggg==


См. также:


[FileUpload](FileUpload.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
