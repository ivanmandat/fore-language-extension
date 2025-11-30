# TreeList.getCaptionHeight

TreeList.getCaptionHeight
-


# TreeList.getCaptionHeight


## Синтаксис


getCaptionHeight ();


## Описание


Метод getCaptionHeight возвращает высоту заголовков столбцов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TreeList](../../Components/TreeList/TreeList.htm) с наименованием «treeListSett» (см. «[Пример создания компонента TreeList](../../Components/TreeList/TreeList_example.htm)»). Для всех столбцов компонента установим ширину, равную максимальной ширине содержимого в столбце с индексом 1 в видимых и невидимых строках. А также установим высоту компонента, в 4 раза большую, чем высота заголовка столбцов:


for (var i = 0; i < treeListSett.getColumns().getCount(); i++)


{


    treeListSett.getColumns().getItem(i).setWidth(treeListSett.getMaximalWidthForColumnFull(1));


}


height = treeListSett.getCaptionHeight();


treeListSett.setHeight(height * 4);


После выполнения примера будет изменена высота компонента и ширина его столбцов.


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
