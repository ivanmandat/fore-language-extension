# ICubeMetaLoader.ImportCallback

ICubeMetaLoader.ImportCallback
-


# ICubeMetaLoader.ImportCallback


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
 объект импорта с идентификатором «OBJ_IMPORT». Объект импорта должен быть
 настроен на любой источник данных, кроме базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes, Metabase. Также в примере
 используется класс ImportCallBack,
 описание которого приведено в [ICubeMetaloaderImportCallback.OnAfterStartTransaction](../ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.OnAfterStartTransaction.htm).


			Sub UserProc;

Var

    Mb: IMetabase;

    TSDBKey: Integer;

    ImpRequestDefDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    MetaLoader: ICubeMetaLoader;

    CallBack: ImportCallBack;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получаем ключ базы данных временных рядов

    TSDBKey := mb.GetObjectKeyById("TSDB_I");

    // Получаем объект импорта

    ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", TSDBKey);

    // Получаем параметры импорта временных рядов

    ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

    MetaLoader := ImpRequestDef.ProviderParams As ICubeMetaLoader;

    // Не используем промежуточные транзакции

    MetaLoader.DisableTransactions := True;

    // Создаем объект для обработки событий импорта

    CallBack := New ImportCallBack.Create;

    MetaLoader.ImportCallback := CallBack;

    // Выполняем импорт данных

    MetaLoader.LoadData;

End Sub UserProc;


В результате выполнения примера в базу данных временных рядов «TSDB_I»
 будет выполнен импорт данных по настройкам, заданным в объекте импорта
 «OBJ_IMPORT». Импорт будет выполнен за одну транзакцию.


См. также:


[ICubeMetaLoader](ICubeMetaLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
