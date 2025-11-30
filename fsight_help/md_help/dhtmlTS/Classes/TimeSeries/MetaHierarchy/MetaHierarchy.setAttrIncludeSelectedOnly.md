# MetaHierarchy.setAttrIncludeSelectedOnly

MetaHierarchy.setAttrIncludeSelectedOnly
-


# MetaHierarchy.setAttrIncludeSelectedOnly


## Синтаксис


setAttrIncludeSelectedOnly (attrId, value);


## Параметры


attrId. Идентификатор атрибута;


value. Значения свойства includeSelectedOnly.


## Описание


Метод setAttrIncludeSelectedOnly устанавливает на всех уровнях для атрибутов иерархии свойство includeSelectedOnly отвечающее за то, чтобы при построении иерархии учитывались только выделенные значения атрибута.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами, получить экземпляр рабочей книги из базы данных временных рядов, получить экземпляр иерархии метаданных с наименованием «hie» (см. «[MetaHierarchy.ChildEls](MetaHierarchy.ChildEls.htm)»). Предполагается наличие атрибута с идентификатором «DL».  В обработчике события открытия документа добавить следующий код:


console.log("Устанавливаем свойство includeSelectedOnly на всех уровнях для атрибута по его идентификатору");
hie.setAttrIncludeSelectedOnly("DL", true);

После выполнения примера будет установлено для атрибута с идентификатором «DL» свойство includeSelectedOnly будет установлено в true, а в консоль браузера будет выведено соответствующее сообщение.


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
