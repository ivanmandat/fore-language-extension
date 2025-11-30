# IVariableStub.NamingDimension

IVariableStub.NamingDimension
-


# IVariableStub.NamingDimension


## Синтаксис


NamingDimension(Index: Integer): [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Параметры


Index. Индекс измерения.


## Описание


Свойство NamingDimension
 возвращает структуру измерения, используемого для формирования наименований.


## Комментарии


Свойство актуально, если источником данных является база данных временных
 рядов. Измерение используется для формирования наименований моделей и
 вычисляемых рядов.


Измерения будут располагаться в порядке, заданном в свойстве IRubricator.Facts.[AttributeNamings](KeRds.chm::/Interface/IMetaAttributeNamings/IMetaAttributeNamings.htm).
 Для получения количества измерений используйте свойство [IVariableStub.DimensionCount](IVariableStub.DimensionCount.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Rubr: IRubricator;

    Stub: IVariableStub;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем базу данных временных рядов в виде абстрактного источника данных

    Rubr := MB.ItemById("TSDB").Bind As IRubricator;

    Stub := Rubr As IVariableStub;

    // Выводим в окно консоли измерения, используемые для формирования наименований

    For i := 0 To Stub.DimensionCount - 1 Do

        Debug.WriteLine((Stub.NamingDimension(i) As IMetabaseObject).Name);

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименования
 измерений, используемых для формирования наименований.


См. также:


[IVariableStub](IVariableStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
