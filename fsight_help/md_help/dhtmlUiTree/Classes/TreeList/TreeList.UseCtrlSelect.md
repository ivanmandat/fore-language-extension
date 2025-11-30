# TreeList.UseCtrlSelect

TreeList.UseCtrlSelect
-


# TreeList.UseCtrlSelect


## Синтаксис


UseCtrlSelect: Boolean


## Описание


Свойство UseCtrlSelect определяет возможность выбора нескольких вершин при удержании клавиши CTRL.


## Комментарии


Если для свойства установлено значение true, доступен выбор нескольких вершин при удержании клавиши CTRL, иначе - не доступен.


По умолчанию установлено значение true.


## Пример


Для выполнения примера [создайте компонент TreeList](../../Components/TreeList/TreeList_example.htm) с наименованием «treeListSett».


Значение свойства можно установить через JSON-объект:


UseCtrlSelect: false


или на уровне API:


treeListSett.setUseCtrlSelect(false);


После выполнения примера будет недоступен выбор нескольких вершин при удержании клавиши CTRL.


Примечание. Значение свойства перекрывается значением, установленным для свойства [TreeList.IsCSMultiSelect](TreeList.IsCSMultiSelect.htm).


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
