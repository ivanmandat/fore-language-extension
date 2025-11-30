# ImagePreloader.getIsCORSSupported

ImagePreloader.getIsCORSSupported
-


# ImagePreloader.getIsCORSSupported


## Синтаксис


getIsCORSSupported();


## Описание


Метод getIsCORSSupported возвращает
 признак поддержки технологии CORS.


## Комментарии


Метод возвращает значение true,
 если технология CORS поддерживается, иначе false.


## Пример


Для выполнения примера предполагается наличие класса [ImagePreloader](ImagePreloader.htm)
 с наименованием «imagePreloader» (см. «[Конструктор
 ImagePreloader](Constructor_ImagePreloader.htm)»). Проверим, поддерживается ли технология CORS:


// Проверяем, поддерживается ли технология CORS
if (imagePreloader.getIsCORSSupported()) {
    console.log("Технология CORS поддерживается");
} else {
    console.log("Технология CORS не поддерживается");
}
В результате в консоль будет выведена информация о поддержке технологии
 CORS:


Технология CORS поддерживается


См. также:


[ImagePreloader](ImagePreloader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
