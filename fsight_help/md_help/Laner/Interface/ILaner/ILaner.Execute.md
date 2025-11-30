# ILaner.Execute

ILaner.Execute
-


# ILaner.Execute


## Синтаксис


Execute: [ILanerTable](../ILanerTable/ILanerTable.htm);


## Описание


Метод Execute осуществляет расчет
 рабочей области и возвращает таблицу, содержащую ее данные.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 Memo, TabSheetBox, UiErAnalyzer с наименованиями Button1, Memo1, TabSheetBox1
 и UiErAnalyzer1 соответственно. UiErAnalyzer1 является источником данных
 для TabSheetBox1. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов, содержащая совмещенный ряд.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Collections, Express, ExtCtrls,
 Forms, Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Tb: ILanerTable;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Tb := Laner.Execute;

	    If Tb.IsEditing Then

	        Memo1.Lines.Add("Таблица находится в режиме редактирования данных");

	        Else

	            Memo1.Lines.Add("Таблица находится в режиме чтения данных");

	    End If;

	End Sub Button1OnClick;


После выполнения примера рабочая область будет рассчитана, а в компонент
 «Memo1» будет выведена информация о режиме, в котором находится таблица
 данных.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
