# ILanerAttributeColumn.MetaAttributeEx

ILanerAttributeColumn.MetaAttributeEx
-


# ILanerAttributeColumn.MetaAttributeEx


## Синтаксис


MetaAttributeEx(Serie: [ILanerSerie](../ILanerSerie/ILanerSerie.htm)):
 [IMetaAttribute](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.htm);


## Параметры


Serie. Ряд, отображаемый атрибут
 которого необходимо получить.


## Описание


Свойство MetaAttributeEx возвращает
 отображаемый атрибут для указанного ряда.


## Комментарии


Параметр Serie не может принимать
 значение Null.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, Memo1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов. В боковике рабочей книге должны отображаться дополнительные
 атрибуты ряда.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        ErAn: IEaxAnalyzer;

	        Laner: ILaner;

	        LanerAttr: ILanerAttributeColumns;

	        LanerA: ILanerAttributeColumn;

	        SourSerie: ILanerSerie;

	    Begin

	        ErAn := UiErAnalyzer1.ErAnalyzer;

	        Laner := ErAn.Laner;

	        LanerAttr := Laner.AttributeColumns;

	        If LanerAttr.Count > 0 Then

	            If LanerAttr.Column(0).Type = LnColumnType.Attribute Then

	                LanerA := LanerAttr.Column(0) As ILanerAttributeColumn;

	                If LanerBox1.SelectedSeriesCount > 0 Then

	                    SourSerie := LanerBox1.SelectedSeries(0);

	                    Debug.WriteLine(LanerA.MetaAttributeEx(SourSerie).Name);

	                End If;

	            End If;

	        End If;

	    End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено наименование
 первого отображаемого атрибута для первого ряда, выделенного в рабочей
 книге.


См. также:


[ILanerAttributeColumn](ILanerAttributeColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
