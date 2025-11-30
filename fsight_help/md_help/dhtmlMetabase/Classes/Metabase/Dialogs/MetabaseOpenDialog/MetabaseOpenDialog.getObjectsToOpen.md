# MetabaseOpenDialog.getObjectsToOpen

MetabaseOpenDialog.getObjectsToOpen
-


**


# MetabaseOpenDialog.getObjectsToOpen


## Синтаксис


getObjectsToOpen();


## Описание


Метод getObjectsToOpen**
 возвращает выбранные объекты репозитория в диалоге их открытия.


## Комментарии


Метод возвращает массив объектов типа [PP.Mb.Object](../../Object/Object.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MetabaseOpenDialog](../../../../Components/Metabase/Dialogs/MetabaseOpenDialog/MetabaseOpenDialog.htm)
 с наименованием «metabaseOpenDialog» (см. «[Пример
 создания компонента MetabaseOpenDialog](../../../../Components/Metabase/Dialogs/MetabaseOpenDialog/MetabaseOpenDialog_Example.htm)»). Также требуется, чтобы в
 диалоге открытия объектов из репозитория был выбран произвольный объект.


Определим ключ и наименование объекта, выбранного в диалоге. Затем обработаем
 событие [OpenObject](MetabaseOpenDialog.OpenObject.htm), выводя
 в консоли браузера также идентификатор данного объекта:


// Получим выбранные в диалоге объекты
var mbObjects = metabaseOpenDialog.getObjectsToOpen();
if (mbObjects.length != 0) {
    // Получим ключ и наименование первого выбранного объекта
    var mbObject = mbObjects[0];
    console.log("Ключ объекта: " + mbObject.getKey());
    console.log("Наименование объекта: " + mbObject.getName());
} else {
    console.log("Нет выделенных объектов");
};
var args;
// Обработаем событие OpenObject
metabaseOpenDialog.OpenObject.add(function (sender, args) {
    console.log("Идентификатор объекта: " + args.Objects[0].getId());
});

В результате выполнения примера в консоли браузера были выведены ключ
 и наименование выбранного в диалоге объекта. После нажатия на кнопку «OK»
 было сгенерировано событие [OpenObject](MetabaseOpenDialog.OpenObject.htm),
 обработчик которого вывел также идентификатор данного объекта:


Ключ объекта: 2283

Наименование объекта: Социально-экономические показатели

Идентификатор объекта: OBJ2283


См. также:


[MetabaseOpenDialog](MetabaseOpenDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
