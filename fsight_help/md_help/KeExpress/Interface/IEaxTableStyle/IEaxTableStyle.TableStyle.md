# IEaxTableStyle.TableStyle

IEaxTableStyle.TableStyle
-


# IEaxTableStyle.TableStyle


## Синтаксис


TableStyle: [ITabTableStyle](TabSheet.chm::/Interface/ITabTableStyle/ITabTableStyle.htm);


## Описание


Свойство TableStyle возвращает
 стиль оформления областей элементов измерений в таблице экспресс-отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: ITabTableStyle;

	    s1, s2: ITabCellStyle;

	Begin

	    s1 := New TabCellStyle.Create;

	    s1.BackgroundColor := GxColor.FromName("AliceBlue");

	    s2 := New TabCellStyle.Create;

	    s2.BackgroundColor := GxColor.FromName("Silver");

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style.TableStyle;

	    Style.RowFirstStripe.Style := s1;

	    Style.RowSecondStripe.Style := s2;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будет изменен стиль оформления
 областей элементов измерений в таблице экспресс-отчета. Цвет строк с элементами
 будет чередоваться.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
