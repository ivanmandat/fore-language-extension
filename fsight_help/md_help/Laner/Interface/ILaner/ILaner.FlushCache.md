# ILaner.FlushCache

ILaner.FlushCache
-


# ILaner.FlushCache


## Синтаксис


FlushCache;


## Описание


Метод FlushCache сброса кеша
 измерений рабочей книги базы данных временных рядов.


## Комментарии


FlushCache очищает кеш измерений
 без переоткрытия рабочей книги и обновления данных.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        ErAn: IEaxAnalyzer;

	        Laner: ILaner;

	    Begin

	        ErAn := UiErAnalyzer1.ErAnalyzer;

	        Laner := ErAn.Laner;

	        Laner.FlushCache;

	    End Sub Button1OnClick;


После выполнения примера будет обновлен кеш загруженной рабочей книги
 базы данных временных рядов.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
