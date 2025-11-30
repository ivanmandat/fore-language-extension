# Конструктор ImagePreloader

Конструктор ImagePreloader
-


# Конструктор ImagePreloader


## Синтаксис


PP.Ui.ImagePreloader(settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор ImagePreloader создает
 экземпляр класса [ImagePreloader](ImagePreloader.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценариев PP.js, PP.Util.js и файл стилей PP.css. Создаем загрузчик
 изображений и добавляем несколько изображений:


function createImagePreloader() {
    // Создаем загрузчик изображений
    imagePreloader = new PP.Ui.ImagePreloader({
        // Устанавливаем время ожидания загрузки изображений
        Timeout: 5000,
        // Устанавливаем адрес прокси-сервера
        Proxy: "proxy",
        // Устанавливаем признак загрузки изображений без использования технологии CORS
        UseCORS: false,
        // Отключаем использование прокси-сервера для загрузки изображений
        AllowTaint: false,
        // Устанавливаем обработчик события загрузки изображений
        Preloaded: function (sender, args) {
            console.log("Все изображения загружены");
        }
    });
    // Добавляем изображения для загрузки
    imagePreloader._Images = {
        address1: "../build/img/b_a_r.png",
        address2: "../build/img/b_a_l.png"
    }
}
Получаем все загружаемые изображения:


// Получаем все загружаемые изображения
console.log("Загружаемые изображения:");
for (var i in imagePreloader.getImages()) {
    console.log(imagePreloader.getImages()[i]);
}
В результате в консоль будут выведены все загружаемые изображения:


Загружаемые изображения:


../build/img/b_a_r.png


../build/img/b_a_l.png


Получаем изображение по адресу «address1»:


// Получаем изображение по адресу
console.log("Изображение по адресу: " + imagePreloader.getImageBySrc("address1"));
В результате в консоль будет выведено изображение по адресу:


../build/img/b_a_r.png


Загружаем все изображения за сервер:


// Загружаем изображения
imagePreloader.preload();
В консоль будет выведена информация о загрузке изображений:


Все изображения загружены


См. также:


[ImagePreloader](ImagePreloader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
