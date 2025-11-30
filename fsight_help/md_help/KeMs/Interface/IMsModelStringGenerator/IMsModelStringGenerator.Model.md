# IMsModelStringGenerator.Model

IMsModelStringGenerator.Model
-


# IMsModelStringGenerator.Model


## Синтаксис


Model: [IMsModel](../IMsModel/IMsModel.htm);


## Описание


Свойство Model
 возвращает модель, для которой генерируется строковое представление.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов. Первый ряд рабочей книги должен быть вычислимым.


Добавьте ссылки на системные сборки: Metabase, Ms.


Пример является обработчиком события OnClick
 для кнопки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Laner: ILaner;

    Series: ILanerSeries;

    CalcSerie: ILanerCalculateSerie;

    ModelDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    StringGenerator: IMsModelStringGenerator;

    Period: IMsModelPeriod;

    s: String;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    Series := Laner.Series;

    CalcSerie := Series.Item(0) As ILanerCalculateSerie;

    ModelDescr := CalcSerie.SaveModel;

    Model := ModelDescr.Edit As IMsModel;

    StringGenerator := Model.CreateStringGenerator;

    s := StringGenerator.Execute;

    Period := StringGenerator.Model.Transform.Period;

    s := s + " (" + Period.ForecastStartDate.ToString + ")";

    (Model As IMetabaseObject).Name := s;

    (Model As IMetabaseObject).Save;

End Sub Button1OnClick;


После выполнения примера первый ряд рабочей области будет сохранен в
 виде модели. Наименование модели будет сгенерировано и дополнено датой
 начала периода прогнозирования.


См. также:


[IMsModelStringGenerator](IMsModelStringGenerator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
