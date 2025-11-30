# PP.Prx.Ui.GridView.TableSource

PP.Prx.Ui.GridView.TableSource
-


# GridView.TableSource


## Синтаксис


TableSource: PP.Prx.[TableDataSource](../TableDataSource/TableDataSource.htm)


## Описание


Свойство TableSource определяет источник данных таблицы регламентного отчета.


## Комментарии


Источник данных таблицы регламентного отчета - экземпляр класса [TableDataSource](../TableDataSource/TableDataSource.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице области данных с наименованием «dataArea» (cм. «[Пример размещения компонента DataArea](../../../Components/RegularReport/DataArea/DataArea_Example.htm)»). Добавим функцию changeSource:


function changeSource() {


     dataArea.getGridView().setTableSource(new PP.Prx.TableDataSource({


            ObjectsAsImage: true,


            Source: prxReport1,


            Metabase: metabase})


}


После выполнения функции changeSource изменятся данные таблицы регаламентного отчета: будут отображаться данные отчета с наименованием prxReport1.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
