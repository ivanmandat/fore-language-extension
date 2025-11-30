# ISQLCommandInstance.Execute

ISQLCommandInstance.Execute
-


# ISQLCommandInstance.Execute


## Синтаксис


Execute: Integer;


## Описание


Метод Execute запускает объект
 на выполнение и возвращает количество обработанных записей.


## Комментарии


Если осуществляется работа с командой СУБД, то метод возвращает количество
 вставленных/удалённых/обновлённых записей.


При работе с процедурой/функцией метод возвращает значение «-1», при
 этом результаты работы процедуры/функции будут доступны в коллекции значений
 параметров, которые должны быть сформированы при открытии объекта репозитория.
 Также экземпляр объекта ISQLCommandInstance может быть приведён к интерфейсу
 [IMetabaseObjectInstance](KeSom.chm::/Interface/IMetabaseObjectInstance/IMetabaseObjectInstance.htm),
 который позволяет работать с параметрами объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории процедуры
 с идентификатором P_CALC. Процедура в своей структуре имеет два входных
 параметра с идентификаторами pMin, pMax и один выходной с идентификатором
 pResult. В процедуре выполняется какой-либо расчёт.


Добавьте ссылки на системные сборки: Db, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MDesc: IMetabaseObjectDescriptor;

    PValues: IMetabaseObjectParamValues;

    SQLInst: ISQLCommandInstance;

Begin

    MB := MetabaseClass.Active;

    // Описание процедуры

    MDesc := MB.ItemById("P_CALC");

    // Создание набора параметров

    PValues := MDesc.Params.CreateEmptyValues;

    PValues.FindById("pMin").Value := 0;

    PValues.FindById("pMax").Value := 1000;

    // Получение открытого экземпляра

    SQLInst := MDesc.Open(PValues) As ISQLCommandInstance;

    // Выполнение процедуры

    SQLInst.Execute;

    // Вывод значения выходного параметра

    Debug.WriteLine(PValues.FindById("pResult").Value);

End Sub UserProc;


При выполнении примера будет получен экземпляр процедуры, предназначенный
 для её выполнения. При открытии экземпляра будут заданы входные параметры.
 После запуска процедуры на выполнение полученное значение выходного параметра
 будет выведено в консоль среды разработки.


См. также:


[ISQLCommandInstance](ISQLCommandInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
