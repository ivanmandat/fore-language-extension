# IDalCommandEx.ExecuteEx

IDalCommandEx.ExecuteEx
-


# IDalCommandEx.ExecuteEx


## Синтаксис


ExecuteEx(ClearParamSetsOnError: Boolean): Integer;


## Параметры


ClearParamSetsOnError. Признак
 сброса счетчика обработанных наборов значений параметров после выполнения
 метода.


## Описание


Метод ExecuteEx выполняет команду
 на сервере БД и возвращает число обработанных записей.


## Комментарии


Если в качестве параметра ClearParamSetsOnError
 передается значение True, то метод
 отработает также, как и метод [IDalCommand.Execute](../IDalCommand/IDalCommand.Execute.htm).


Если параметру ClearParamSetsOnError
 установить значение False, то
 после выполнения метода не будет сброшен счетчик обработанных наборов
 значений параметров, который доступен в свойстве [IDalCommand.CurrentParamsRow](../IDalCommand/IDalCommand.CurrentParamsRow.htm).
 Если во время выполнения команды возникли какие-либо ошибки, то получив
 значение [IDalCommand.CurrentParamsRow](../IDalCommand/IDalCommand.CurrentParamsRow.htm),
 можно узнать сколько наборов было обработано. С помощью метода [SetCurrentParamsRow](IDalCommandEx.SetCurrentParamsRow.htm)
 можно будет пройти по наборам параметров и выполнить отдельную команду
 с выбранными значениями. Таким образом, можно определить набор значений,
 который вызывает ошибку выполнения SQL-запроса.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «DB». В СУБД, на которую настроена база данных, должна
 быть создана таблица с физическим именем «Table1». В данной таблице имеется
 символьное поле «Comments», имеющее ограничение по длине данных не более
 60 символов.


			Sub UserProc;

Var

    //...

    MB: IMetabase;

    DBInst: IDatabaseInstance;

    Connect: ISecurityConnection;

    Transaction1, Transaction2: IConnectionTransaction;

    Command, CheckCommand: IDalCommand;

    CommandEx: IDalCommandEx;

    Param, CheckParam: IDalCommandParam;

    i, Count: Integer;

    SQL: String;

Begin

    MB := MetabaseClass.Active;

    //Запрос, который будет выполняться

    SQL := "insert into Table1(Comments) values(:CommentValue)";

    DBInst := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

    Connect := DBInst.Connection;

    Command := Connect.CreateCommand(SQL);

    //Анализ SQL-запроса

    Command.Parse;

    //Указание коллекции значений параметра

    Param := Command.Params.Item(0);

    Param.DataType := DbDataType.String;

    Command.MaxParamsRows := 4;

    //Первое значение

    Param.Value := "Значение 1";

    Command.NextParamsRow;

    //Второе значение

    Param.Value := "Значение 2";

    Command.NextParamsRow;

    //Третье значение

    Param.Value := "Очень длинное значение, на которое не рассчитано поле таблицы.";

    Command.NextParamsRow;

    //Четвертое значение

    Param.Value := "Значение 4";

    //Получение команды

    CommandEx := Command As IDalCommandEx;

    //Выполнение

    Try

        //Инициализация
 транзакции и выполнение команды

        Transaction1 := Connect.StartTransaction(False);

        CommandEx.ExecuteEx(False);

    Except

        //При возникновении ошибки откатим все изменения

        Transaction1.Rollback;

        Debug.WriteLine("При выполнении SQL-запроса возникла ошибка");

        //В отдельной транзацкии проверим выполнение команды

        //с отдельными значениями параметра.

        //Для этого создадим отдельную команду

        Transaction2 := Connect.StartTransaction(False);

        CheckCommand := Transaction2.CreateCommand(SQL);

        CheckCommand.Parse;

        CheckParam := CheckCommand.Params.Item(0);

        //Инициализация отдельной транзакции

        Count := Command.CurrentParamsRow;

        For i := 0 To Count Do

            CommandEx.SetCurrentParamsRow(i);

            //Установка значения, с которым будет производиться
 проверка

            CheckParam.Value := Param.Value;

            Try

                CheckCommand.Execute;

            Except

                Debug.WriteLine("Ошибка при выполнении запроса со значением параметра:" + Command.Params.Item(0).Value);

            End Try;

        End For;

        //Откатим все изменения, внесенные в рамках проверки

        Transaction2.Rollback;

    Finally

        If Connect.InTransaction Then

            Transaction1.Commit;

        End If;

    End Try;

    //Сброс счетчика наборов параметров

    CommandEx.ClearParamSets;

    //Изменение набора параметров и дальнейшее использование

    //команды CommandEx

    //...

End Sub UserProc;


При выполнении примера производится выполнение SQL-команды для вставки
 в таблицу набора значений. После выполнения команды счетчик наборов значений
 параметров сброшен не будет. Если при выполнении возникла какая-либо ошибка,
 то будет произведена проверка выполнения SQL-команды с отдельными значениями
 параметров.


См. также:


[IDalCommandEx](IDalCommandEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
