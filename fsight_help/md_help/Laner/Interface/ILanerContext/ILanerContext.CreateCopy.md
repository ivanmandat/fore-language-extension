# ILanerContext.CreateCopy

ILanerContext.CreateCopy
-


# ILanerContext.CreateCopy


## Синтаксис


CreateCopy(Laner: [ILaner](../ILaner/ILaner.htm)):
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Laner. Рабочая книга.


## Описание


Метод CreateCopy создает
 копию указанной рабочей книги.


## Комментарии


Рабочая книга может использоваться только в одном контексте. Для регистрации
 рабочей книги в нескольких контекстах используются её копии.


При копировании рабочей книги внутри одного контекста все формулы, использующие
 ряды из других рабочих книг, будут сохранены. При копировании рабочей
 книги между разными контекстами теряются формулы, содержащие зависимости
 от других рабочих книг.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Также предполагается наличие переменой «pContext», содержащей контекст.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pContext: ILanerContext;

	    Laner: ILaner;

	    LanerObject: IMetabaseObjectDescriptor;

	Begin

	    pContext.BeginLoad;

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    If Not Laner.IsInContext Then

	        pContext.Register(Laner);

	    Else

	        LanerObject := pContext.CreateCopy(Laner);

	        pContext.Register((LanerObject As IEaxAnalyzer).Laner);

	        pContext.EndLoad;

	    End If;

	End Sub Button1OnClick;


После выполнения примера рабочая книга будет зарегистрирована в контексте.
 Если она уже содержится в контексте, то будет зарегистрирована её копия.


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
