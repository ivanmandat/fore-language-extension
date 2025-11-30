# MetaHierarchy.getAttributeById

MetaHierarchy.getAttributeById
-


# MetaHierarchy.getAttributeById


## Синтаксис


getAttributeById (value);


## Параметры


value. Задает
 идентификатор атрибута.


## Описание


Метод getAttributeById определяет
 список атрибутов по значению идентификатора.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными
 рядами, получить экземпляр рабочей книги из базы данных временных рядов
 (см. «[MetaHierarchy.ChildEls](MetaHierarchy.ChildEls.htm)»),
 также предполагается наличие атрибута с идентификатором «DL». В
 обработчике события открытия документа добавить следующий код:


console.log("Получаем атрибут по его идентификатору");
var attr = hie.getAttributeById("DL");
console.log(attr);

После выполнения примера в консоль браузера будет выведен атрибут по
 его идентификатору:


Object {k: 4, id: "DL", n: "Период",
 vis: true, dim: Object…}


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
