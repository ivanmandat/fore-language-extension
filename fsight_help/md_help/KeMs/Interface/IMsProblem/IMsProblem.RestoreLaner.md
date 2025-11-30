# IMsProblem.RestoreLaner

IMsProblem.RestoreLaner
-


# IMsProblem.RestoreLaner


## Синтаксис


RestoreLaner(Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);
 ParamValues: [IMsModelParamValues](../IMsModelParamValues/IMsModelParamValues.htm));


## Параметры


Laner.
 Рабочая область базы данных временных рядов;


ParamValues.
 Параметры, с которыми будет восстановлена задача. Если параметры для задачи
 не заданы, то следует указывать значение Null.


## Описание


Метод RestoreLaner восстанавливает
 рабочую область базы данных временных рядов из задачи.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая книга базы
 данных временных рядов. В контейнере моделирования данной базы должна
 присутствовать задача с идентификатором OBJ_PROBLEM.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ErAn: IEaxAnalyzer;

    Laner: ILaner;

    ActiveMetabase: IMetabase;

    Rub: IRubricator;

    Cont: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

Begin

    ErAn := UiErAnalyzer1.ErAnalyzer;

    Laner := ErAn.Laner;

    Rub := Laner.RubricatorInstance.Rubricator;

    Cont := Rub.ModelSpace;

    ActiveMetabase := MetabaseClass.Active;

    Problem := ActiveMetabase.FetchItemById("OBJ_PROBLEM", Cont.Key).Edit As IMsProblem;

    Problem.RestoreLaner(Laner, Null);

End Sub Button1OnClick;


При нажатии на кнопку Button1 в рабочую область базы данных временных
 рядов будут восстановлены ряды из задачи OBJ_PROBLEM.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
