# MetaHierarchy.getDimOdId

MetaHierarchy.getDimOdId
-


# MetaHierarchy.getDimOdId


## Синтаксис


getDimOdId (value);


## Параметры


value. Задает ключ измерения.


## Описание


Метод getDimOdId возвращает объект, содержащий моникёр измерения по ключу измерения.


## Пример


Для выполнения примера предполагается наличие измерения с ключом 0. Необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, получить экземпляр иерархии метаданных с наименованием «hie» (см. «[MetaHierarchy.ChildEls](MetaHierarchy.ChildEls.htm)») и в обработчике события открытия документа добавить следующий код:


console.log("Получаем объект, содержащий моникёр измерения по ключу измерения");
var dimOdId = hie.getDimOdId(0);
console.log(dimOdId);

После выполнения примера в консоль браузера будет выведен объект, содержащий моникёр измерения:


Object {id: "NKIGECAKMCECEOAEMPHNFILLFMIFIEBEDLPCHFAPIJGOAONI!M!S!HGHOKMDAKMCECEOAEAIOBNGFCPJEOPDPEJLCCPJPCBKFDFHJO!0"


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
