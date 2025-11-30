# IMsMetaModelVisualController.RemoveFactor

IMsMetaModelVisualController.RemoveFactor
-


# IMsMetaModelVisualController.RemoveFactor


## Синтаксис


RemoveFactor(Model: [IMsModel](../IMsModel/IMsModel.htm);

             Index:
 Integer;

             RemoveSimilar:
 Boolean;

             RemoveModel:
 Boolean): Boolean;


## Параметры


Model. Внутренняя модель, из
 которой требуется удалить фактор;


Index. Индекс удаляемого фактора;


RemoveSimilar. Признак того,
 удалять ли аналогичные факторы, т.е. факторы, состав и отметка измерений
 в которых совпадает с удаляемым фактором;


RemoveModel. Признак того,
 удалять ли модель, если в ней отсутствуют факторы.


## Описание


Метод RemoveFactor удаляет
 указанный фактор из внутренней модели.


## Комментарии


Допустимые значения параметра RemoveSimilar:


	- True. Удалять аналогичные
	 факторы;


	- False. Удалять только
	 указанный фактор.


Допустимые значения параметра RemoveModel:


	- True.
	 Удалять модель, если в ней отсутствуют факторы;


	- False. Оставлять модель,
	 если в ней отсутствуют факторы.


Если фактор удален успешно, то метод возвращает значение True.


## Пример


Для выполнения примера в репозитории должен присутствовать контейнер
 моделирования с идентификатором «MS», содержащий метамодель с идентификатором
 «META». Данная метамодель должна содержать внутреннюю БД временных рядов
 и модель.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub RemoveFactor;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    SimpleModel: IMsModel;

    i: Integer;

    ChainEn: IMsCalculationChainEntries;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем метамодель

    Meta := mb.ItemByIdNamespace("META", MsObj.Key).Bind As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    // Получаем модель

    ChainEn := Meta.CalculationChain;

    For i := 0 To ChainEn.Count - 1 Do

        If ChainEn.Item(i).Type = MsCalculationChainEntryType.Model Then

            SimpleModel := (ChainEn.Item(i) As IMsCalculationChainModel).Model;

        End If;

    End For;

    SimpleModel := (SimpleModel As IMetabaseObject).Edit As IMsModel;

    // Удаляем первый фактор

    If MetaVisual.RemoveFactor(SimpleModel, 0, False, False) Then

        Debug.WriteLine("Удаление выполнено успешно");

    Else

        Debug.WriteLine("Фактор не был удален");

    End If;

    (SimpleModel As IMetabaseObject).Save;

End Sub RemoveFactor;


После выполнения процедуры из первой внутренней модели будет удален
 первый фактор, результат удаления будет выведен в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
