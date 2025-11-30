# IMapLayerArrows.ToolTipFormat

IMapLayerArrows.ToolTipFormat
-


# IMapLayerArrows.ToolTipFormat


## Синтаксис


ToolTipFormat: String;


## Описание


Свойство ToolTipFormat определяет
 формат всплывающей подсказки для стрелок.


## Комментарии


Для обновления данных коллекции стрелок на карте используйте [IMapLayerArrows.RefreshData](IMapLayerArrows.RefreshData.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT, содержащего карту со стрелками.


Добавьте ссылки на системные сборки: Map, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Map: IMap;

	    Layer: IMapLayer;

	    L_Arrows: IMapLayerArrows;

	    Arrow: IMapArrow;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим карту

	    Map := (Report.ActiveSheet As IPrxTable).TabSheet.Objects.Item(0).Extension As IMap;

	    // Получим слой карты

	    Layer := Map.Layers.Item(0);

	    // Получим слой со стрелками на карте

	    L_Arrows := Layer.Arrows;

	    // Будем использовать сопоставление данных и выведем в окно консоли атрибуты сопоставления

	    L_Arrows.UseDataMapping := True;

	    Debug.WriteLine("Имя атрибута, содержащего параметры размера стрелок - " + L_Arrows.BasementWidth.AttributeName);

	    Debug.WriteLine("Имя атрибута, содержащего параметры цвета стрелок - " + L_Arrows.ColorMapping.AttributeName);

	    L_Arrows.ToolTipFormat := "# ##0,00";

	    // Обновим слой со стрелками

	    L_Arrows.RefreshData;

	    // Получим стрелку

	    Arrow := L_Arrows.Item(0);

	    // Изменим идентификатор стрелки

	    Arrow.Id := "MapArrowId";

	    // Выведем в окно консоли

	    Debug.WriteLine("Имя атрибута, содержащего параметры размера стрелки - " + Arrow.BasementWidth.AttributeName);

	    Debug.WriteLine("Имя атрибута, содержащего параметры цвета стрелки - " + Arrow.ColorMapping.AttributeName);

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера изменится формат всплывающих подсказок для
 стрелок, изменится идентификатор указанной стрелки. В окно консоли будут
 выведены имена атрибутов, содержащих параметры размера и цвета стрелок.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
