# IImportRequestInstance.ImportCallback

IImportRequestInstance.ImportCallback
-


# IImportRequestInstance.ImportCallback


## Синтаксис


ImportCallback: [ICubeMetaloaderImportCallback](../ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.htm);


## Описание


Свойство ImportCallback
 определяет объект, используемый для обработки событий, возникающих во
 время импорта временных рядов.


## Комментарии


По умолчанию обработчик событий не используется, то есть свойство ImportCallback имеет значение Null.


Примечание.
 Значение свойства ImportCallback
 не сохраняется.


Обработчик реализуется в виде пользовательского класса, в котором должны
 быть переопределены все методы интерфейса [ICubeMetaloaderImportCallback](../ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.htm)
 и который является наследником класса [Object](ForeSys.chm::/Class/Object/Object.htm)
 и интерфейса [ICubeMetaloaderImportCallback](../ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.htm).
 Если пользовательский класс является наследником классов [Object](ForeSys.chm::/Class/Object/Object.htm)
 и [CubeMetaloaderImportCallback](../../Class/CubeMetaloaderImportCallback/CubeMetaloaderImportCallback.htm), то
 можно переопределить только требуемые метода класса [CubeMetaloaderImportCallback](../../Class/CubeMetaloaderImportCallback/CubeMetaloaderImportCallback.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_I». Данная база должна содержать
 объект импорта с идентификатором «OBJ_IMPORT».


Добавьте ссылки на системные сборки: Cubes, Metabase. В Также в примере
 используется класс ImportCallBack,
 описание которого приведено в [ICubeMetaloaderImportCallback.OnAfterStartTransaction](../ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.OnAfterStartTransaction.htm).


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBKey: Integer;

    Inst: IImportRequestInstance;

    CallBack: ImportCallBack;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ базы данных временных рядов

    TSDBKey := mb.GetObjectKeyById("TSDB_I");

    // Получаем параметры импорта временных рядов

    Inst := mb.ItemByIdNamespace("OBJ_IMPORT", TSDBKey).Open(Null) As IImportRequestInstance;

    // Не используем промежуточные транзакции

    Inst.DisableTransactions := True;

    // Создаем объект для обработки событий импорта

    CallBack := New ImportCallBack.Create;

    Inst.ImportCallback := CallBack;

    // Выполняем импорт данных

    Inst.LoadData;

End Sub UserProc;


В результате выполнения примера в базу данных временных рядов «TSDB_I»
 будет выполнен импорт данных по настройкам, заданным в объекте импорта
 «OBJ_IMPORT». Импорт будет выполнен за одну транзакцию.


См. также:


[IImportRequestInstance](IImportRequestInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
