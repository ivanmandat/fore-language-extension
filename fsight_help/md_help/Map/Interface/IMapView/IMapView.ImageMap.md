# IMapView.ImageMap

IMapView.ImageMap
-


# IMapView.ImageMap


## Синтаксис


ImageMap(Shape: [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm);
 Width: Integer; Height: Integer; Params: String): String;


## Параметры


Shape. Элемент топоосновы;


Width. Ширина в пикселях;


Height. Высота в пикселях;


Params. Действие гиперссылки.


## Описание


Свойство ImageMap определяет
 параметры гиперссылки при щелчке по региону.


## Комментарии


Гиперссылка работает только после экспорта карты в формат HTML.


Для получения карты-родителя используйте свойство [IMapView.Map](IMapView.Map.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «RO_MAP», содержащего карту.


Добавьте ссылки на системные сборки «Metabase», «Report», «Tab», «Map».


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Report: IPrxReport;

	    Sheet: IPrxTable;

	    Map: IMap;

	    ImageMap: String;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	Begin

	    mb := MetabaseClass.Active;

	    Report := mb.ItemById("RO_MAP").Bind As IPrxReport;

	    Sheet := Report.Sheets.Item(0) As IPrxTable;

	    Map := Sheet.TabSheet.Objects.Item(0).Extension As IMap;

	    Layer := Map.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    ImageMap := Map.View.ImageMap(Shape, 800, 600, "title=""" + Shape.Description +

	        """ href=""javascript:alert('" + Shape.Id.ToString + "')""");

	End Sub UserProc;


После выполнения примера для заданного элемента топоосновы в переменной
 «ImageMap» будут содержаться параметры гиперссылки для экспорта карты
 в формат HTML.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
