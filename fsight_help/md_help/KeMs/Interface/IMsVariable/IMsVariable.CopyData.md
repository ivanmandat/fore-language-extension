# IMsVariable.CopyData

IMsVariable.CopyData
-


# IMsVariable.CopyData


## Синтаксис


CopyData(Source: Integer; Destination: Integer);


## Параметры


Source. Ключ измерения, из
 которого необходимо скопировать данные. Если необходимо скопировать данные
 измерения «Факт» - задается значение «-1»;


Destination. Ключ измерения-приёмника,
 в которое будут скопированы данные.


## Описание


Метод CopyData осуществляет
 копирование данных между измерениями переменной.


## Комментарии


Используется для копирования данных между измерением «Факт» и сценарными
 измерениями.


## Пример


Для выполнения примера предполагается наличие контейнера моделирования
 KONT_MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Variable: IMsVariable;

    ScenInst: IDimInstance;

    KeyDest: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("VAR_1", MB.ItemById("KONT_MODEL").Key).Edit;

    Variable := MObj As IMsVariable;

    ScenInst := Variable.ScenarioDimension;

    KeyDest := ScenInst.Elements.AttributeValue(1, 1) As Integer;

    Variable.CopyData(-1, KeyDest);

    Variable.Type := (Not MsVariableType.Loading) And (Not MsVariableType.Saving);

    MObj.Save;

End Sub UserProc;


После выполнения примера будут скопированы данные из измерения «Факт»
 в первый сценарный справочник переменной моделирования VAR_1 и будут отключены
 два дополнительных параметра.


См. также:


[IMsVariable](IMsVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
