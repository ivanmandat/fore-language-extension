# ILaner.PermanentData

ILaner.PermanentData
-


# ILaner.PermanentData


## Синтаксис


PermanentData: Boolean;


## Описание


Свойство PermanentData определяет
 способ загрузки и сохранения данных временных рядов.


## Комментарии


Допустимые значения:


	- True. При открытии рабочей
	 книги данные для загрузки временных рядов берутся из рабочей книги.
	 При сохранении рабочей книги сохранение данных временных рядов также
	 происходит в рабочую книгу;


	- False. Значение по умолчанию.
	 При загрузке данные напрямую загружаются из БД. Сохранение также происходит
	 напрямую.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub UserProc;

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    If Laner.PermanentData Then

	        Laner.PermanentData := False;

	    End If;

	End Sub UserProc;


После выполнения примера рабочая книга будет загружать/сохранять данные
 рядов напрямую в БД.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
