# ILanerSerie.ObservationValue

ILanerSerie.ObservationValue
-


# ILanerSerie.ObservationValue


## Синтаксис


ObservationValue(Attribute: [IMetaAtribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);
 Date: DateTime): Variant;


## Параметры


Attribute. Атрибут наблюдения
 показателя;


Date. Календарная точка.


## Описание


Свойство ObservationValue определяет
 значение атрибута наблюдения показателя в заданной календарной точке.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Rds, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErA: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    Serie: ILanerSerie;

	    Rubricator: IRubricator;

	    ObsAttr: IMetaAttributes;

	    attr: IMetaAttribute;

	    dt: DateTime;

	Begin

	    ErA := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErA.Laner;

	    Series := Laner.Series;

	    Serie := Series.Item(0);

	    Rubricator := Laner.RubricatorInstance.Rubricator;

	    ObsAttr := Rubricator.Values.Attributes;

	    attr := ObsAttr.FindByKind(MetaAttributeKind.Value);

	    dt := DateTime.ComposeDay(2006, 1, 1);

	    Debug.WriteLine(Serie.ObservationValue(attr, dt));

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено значение первого
 ряда рабочей книги на первое января 2006 года.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
