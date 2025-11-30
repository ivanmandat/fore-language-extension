# IPrxMapLegend.Map

IPrxMapLegend.Map
-


# IPrxMapLegend.Map


## Синтаксис


Map: [IPrxMap](../IPrxMap/IPrxMap.htm);


## Описание


Свойство Map определяет карту
 регламентного отчета, для которой строится легенда.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта, на листе которого расположена карта со слоем «Regions» картографическим
 показателем.


Разместите на форме компоненты Button,
 UiReport, ReportBox
 с наименованиями «Button1», «UiReport1» и «ReportBox1» соответственно.
 Для компонента UiReport выберите
 регламентный отчёт в свойстве Object
 и установите значение True в свойстве
 Active. Для компонента ReportBox
 выберите компонент «UiReport1» в свойстве Report.


Добавьте ссылки на системные сборки: Drawing, Forms, Map, Report, Tab.


Пример является обработчиком события «OnClick» для компонента Button.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Obj: ITabObject;

    Map: IPrxMap;

    Sheet: IPrxSheet;

    RectFL, RectFT: IGxRectF;

    LayerL, LayerT: IMapLayer;

    Visual: IMapVisual;

    SheetTab: IPrxTable;

    Objects: ITabObjects;

    Table: ITabSheet;

Begin

    //Определим лист регламентного отчёта, на котором содержится карта с идентификатором PrxMap1

    Sheet := UiReport1.Report.Sheets.Item(0);

    SheetTab := Sheet As IPrxTable;

    Table := SheetTab.TabSheet;

    Objects := Table.Objects;

    Map := Objects.Object("PrxMap1").Extension As IPrxMap;

    // Создадим прямоугольники и зададим для них параметры

    RectFL := New GxRectF.Create(0, 0, 50, 50);

    RectFT := New GxRectF.Create(0, 60, 50, 110);

    // Добавим легенду по идентификатору как объект

    Obj := Objects.Add("PrxMapLegend", RectFL);

    // Определим карту регламентного отчёта, для которой строится легенда

    (Obj.Extension As IPrxMapLegend).Map := Map;

    // Зададим показатель для легенды и отобразим её в заданном прямоугольнике

    LayerL := (Map As IMap).Layers.Item(0);

    Visual := LayerL.Visuals.Item(0);

    (Obj.Extension As IMapLegend).Visual := Visual;

    // Добавим расшифровку по территориям как объект

    Obj := Objects.Add("PrxMapTerritoryInfo", RectFT);

    // Определим карту регламентного отчёта, для которой строится расшифровка

    (Obj.Extension As IPrxMapTerritoryInfo).Map := Map;

    // Зададим слой карты для расшифровки и отобразим её в заданном прямоугольнике

    LayerT := (Map As IMap).Layers.Item(0);

    (Obj.Extension As IMapTerritoryInfo).Layer := LayerT;

End Sub Button1OnClick;


После выполнения примера и нажатия на кнопку в компоненте ReportBox
 отобразится карта регламентного отчёта с легендой и расшифровкой по территориям
 в заданных прямоугольниках.


См. также:


[IPrxMapLegend](IPrxMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
