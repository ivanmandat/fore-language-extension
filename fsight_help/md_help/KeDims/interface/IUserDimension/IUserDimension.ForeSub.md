# IUserDimension.ForeSub

IUserDimension.ForeSub
-


# IUserDimension.ForeSub


## Синтаксис


ForeSub: String;


## Описание


Свойство ForeSub определяет
 наименование макроса, выполняющего построение дерева элементов справочника.


## Комментарии


Модуль/форма, в котором находится реализация макроса, задаётся в свойстве
 [ForeModule](IUserDimension.ForeModule.htm).


В качестве макроса выступает процедура, которая имеет одну из следующих
 сигнатур:


	Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder);

	Sub UserMacro(UserDim: IUserDimension; Builder: IDimBuilder; Param: IMetabaseObjectParamValues);


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 справочника с идентификатором «USER_DIM» и модуля с идентификатором «MACRO_USER_DIM».
 В модуле реализована процедура «CreateDimension», которая используется
 для построения дерева элементов вычисляемого справочника и имеет соответствующую
 сигнатуру.


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Dim: IUserDimension;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("USER_DIM").Edit;

    Dim := MObj As IUserDimension;

    Dim.ForeModule := MB.ItemById("MACRO_USER_DIM").Bind As IModule;

    Dim.ForeSub := "CreateDimension";

    MObj.Save;

End Sub UserProc;


После выполнения примера для вычисляемого справочника будет установлен
 модуль «MACRO_USER_DIM» и макрос для построения справочника «CreateDimension».


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
