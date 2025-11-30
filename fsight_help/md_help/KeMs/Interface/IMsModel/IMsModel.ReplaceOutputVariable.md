# IMsModel.ReplaceOutputVariable

IMsModel.ReplaceOutputVariable
-


# IMsModel.ReplaceOutputVariable


## Синтаксис


ReplaceOutputVariable(Index: Integer; Variable:
 [IMsVariable](../IMsVariable/IMsVariable.htm));


## Параметры


Index. Индекс позиции переменной,
 которую необходимо заменить. Данный параметр имеет смысл только для методов,
 имеющих более одной выходной переменной (система уравнений, модель коррекции
 ошибок), во всех других случаях, в качестве индекса должен передаваться
 0.


Variable. Переменная, которая
 будет установлена в качестве выходной.


## Описание


Метод ReplaceOutputVariable
 осуществляет замену выходной переменной.


## Комментарии


Параметры, установленные для исходной модели, сохраняются только в том
 случае, если структура новой и старой переменной одинаковы.


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Variable: IMsVariable;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Model := MObj As IMsModel;

    Variable := MB.ItemByIdNamespace("Var_11", MB.ItemById("KONT_MODEL").Key).Bind As IMsVariable;

    Model.ReplaceOutputVariable(0, Variable);

    MObj.Save;

End Sub UserProc;


После выполнения примера для модели с идентификатором MODEL_1 будет
 изменена выходная переменная.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
