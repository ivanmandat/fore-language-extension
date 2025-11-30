# ICubeCreatorDimension.Fields

ICubeCreatorDimension.Fields
-


# ICubeCreatorDimension.Fields


## Синтаксис


Fields: [ICubeCreatorFields](../ICubeCreatorFields/ICubeCreatorFields.htm);


## Описание


Свойство Fields возвращает коллекцию полей, используемых для привязки измерения.


## Комментарии


Данное свойство актуально, если для создателя куба указано свойство [ICubeCreator.Table](../ICubeCreator/ICubeCreator.Table.htm) или [ICubeCreatorFact.Table](../ICubeCreatorFact/ICubeCreatorFact.Table.htm). Каждый элемент коллекции Fields соответствует атрибуту, входящему в индекс, который указан в свойстве [Index](ICubeCreatorDimension.Index.htm). В качестве значения свойства [Name](../ICubeCreatorField/ICubeCreatorField.Name.htm) для элемента коллекции должен быть указан идентификатор поля таблицы. С данным полем будет установлена связь измерения при создании куба.


Элементы в коллекцию должны добавляться в том же порядке, в каком добавлены атрибуты в индекс [Index](ICubeCreatorDimension.Index.htm).


## Пример


Пример использования приведен в описании свойств [ICubeCreator.Table](../ICubeCreator/ICubeCreator.Table.htm), [ICubeCreatorFact.Table](../ICubeCreatorFact/ICubeCreatorFact.Table.htm).


См. также:


[ICubeCreatorDimension](ICubeCreatorDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
