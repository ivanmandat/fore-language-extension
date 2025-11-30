# IMsMetaModelVisualController.RenameVariable

IMsMetaModelVisualController.RenameVariable
-


# IMsMetaModelVisualController.RenameVariable


## Синтаксис


RenameVariable(EntryKey: Integer; Name: String):
 Boolean;


## Параметры


EntryKey. Ключ переменной;


Name. Требуемое наименование
 переменной.


## Описание


Метод RenameVariable переименовывает
 указанную внутреннюю переменную метамодели.


## Комментарии


Допустимые значения:


	- True. Переименование
	 выполнено успешно;


	- False. Наименование
	 указанной переменной осталось без изменений.


Для создания внутренней переменной используйте метод [IMsMetaModelVisualController.CreateVariable](IMsMetaModelVisualController.CreateVariable.htm).


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий задачу моделирования
 с идентификатором «FILLMODEL». Данная задача должна содержать внутреннюю
 метамодель, содержащую внутреннюю БД временных рядов и модель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub RenameVariable;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    Varable: IMsCalculationChainVariable;

    pr: IMsProblem;

    i: Integer;

    ChainEn: IMsCalculationChainEntries;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем задачу моделирования

    pr := mb.ItemByIdNamespace("FILLMODEL", MsObj.Key).Bind As IMsProblem;

    // Получаем метамодель

    Meta := pr.MetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем модель

    ChainEn := Meta.CalculationChain;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Variable Then

            Varable := ChainEn.Item(i) As IMsCalculationChainVariable;

            MetaVisual.RenameVariable(Varable.Key, Varable.Name + "_");

        End If;

    End For;

End Sub RenameVariable;


После выполнения примера все внутренние переменные указанной задачи
 будут переименованы.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
