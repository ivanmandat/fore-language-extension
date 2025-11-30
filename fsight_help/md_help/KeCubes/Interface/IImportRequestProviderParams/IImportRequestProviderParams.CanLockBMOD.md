# IImportRequestProviderParams.CanLockBMOD

IImportRequestProviderParams.CanLockBMOD
-


# IImportRequestProviderParams.CanLockBMOD


## Синтаксис


CanLockBMOD: Boolean;


## Описание


Свойство CanLockBMOD определяет
 режим блокировки системной таблицы во время загрузки показателей в базу
 данных временных рядов.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом во время загрузки осуществляется блокировка системной таблицы.
 Данная блокировка позволяет избежать параллельной записи в базу данных
 временных рядов, в которую производится загрузка. Если при этом параллельно
 будет запущено какое-либо копирование, то оно будет установлено в очередь.


При установке свойству CanLockBMOD
 значения False во время загрузки
 показателей блокировка системной таблицы производиться не будет. Анализ
 запуска параллельных действий с базой данных временных рядов возлагается
 на прикладного разработчика.


Важно. Параллельный
 запуск нескольких загрузок при отключенной блокировке системной таблицы
 может привести к зависанию запущенных процессов.


Значение данного свойства не сохраняется, его изменение доступно только
 при работе с объектом загрузки из Fore.
 Для задания свойства приведите результат импорта показателей (свойство
 [IImportRequestInstance.ImportResult](../IImportRequestInstance/IImportRequestInstance.ImportResult.htm))
 к интерфейсу [IImportRequestProviderParams](IImportRequestProviderParams.htm)
 и установите необходимое значение.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC_FROM». В базе создан объект импорта
 с идентификатором «OBJ_IMPORT».


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    ImportRequestInst: IImportRequestInstance;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("FC_AUTO");

    ImportRequestInst := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key).Open(Null) As IImportRequestInstance;

    //Снятие блокировки системной таблицы

    (ImportRequestInst.ImportResult As IImportRequestProviderParams).CanLockBMOD := False;

    //...

    //Настройка остальных параметров загрузки

    //...

    ImportRequestInst.LoadData;

End Sub UserProc;


При выполнении примера будет запущен процесс загрузки показателей в
 базу данных временных рядов. При этом будет отключена блокировка системной
 таблицы, которая позволяет на системном уровне отслеживать процессы работы
 с базой данных временных рядов. До завершения текущей загрузки процесс
 отслеживания запуска других работ с базой должен выполняться в прикладном
 коде.


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
