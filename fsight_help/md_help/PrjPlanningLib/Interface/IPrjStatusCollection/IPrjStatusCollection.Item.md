# IPrjStatusCollection.Item

IPrjStatusCollection.Item
-


# IPrjStatusCollection.Item


## Синтаксис


Item(Index: Integer): [IPrjStatusItem](../IPrjStatusItem/IPrjStatusItem.htm);


## Параметры


Index. Индекс ошибки или предупреждения
 при построении плана проекта.


## Описание


Свойство Item возвращает ошибку
 или предупреждение из коллекции по индексу.


## Комментарии


Ошибки или предупреждения могут возникнуть при построении плана проекта.
 Для проверки плана проекта на наличие ошибок или предупреждений используйте
 метод [IPrjProject.CheckConstraints](../IPrjProject/IPrjProject.CheckConstraints.htm).


Примечание.
 Свойство возвращает только первую найденную ошибку или предупреждение
 с индексом «0».


## Пример


Использование свойства приведено в примере для [IPrjProject.Status](../IPrjProject/IPrjProject.Status.htm).


См. также:


[IPrjStatusCollection](IPrjStatusCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
