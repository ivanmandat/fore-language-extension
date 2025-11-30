# IMsModel.TreatNullsAsZeros

IMsModel.TreatNullsAsZeros
-


# IMsModel.TreatNullsAsZeros


## Синтаксис


TreatNullsAsZeros: Boolean;


## Описание


Свойство TreatNullsAsZeros
 определяет, заменять ли при расчете модели пустые значения нулями.


## Комментарии


Пустое значение - это Null.


Допустимые значения TreatNullsAsZeros:


	- True. Пустые значения
	 в данных переменных будут заменены нулями при расчете модели. Обратите
	 внимание, что не будет работать обработка пропусков;


	- False. Значение
	 по умолчанию. При расчете модели к пустым значениям в данных переменных
	 будут применяться только методы обработки пропусков.


Примечание.
 Свойства IMsModel.TreatNullsAsZeros
 и [IMsProblemCalculation.TreatNullsAsZeros](../IMsProblemCalculation/IMsProblemCalculation.TreatNullsAsZeros.htm)
 работают совместно по условию ИЛИ.
 Например, если для модели TreatNullsAsZeros
 установлено в False, а для задачи,
 рассчитывающую данную модель TreatNullsAsZeros
 установлено в True, то при расчете
 задачи в модели пустые значения будут заменены нулями.

Данная возможность позволяет управлять заменой пустых значений нулями как
 отдельно для каждой модели, так и для всех моделей, рассчитываемых задачей.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    mObj: IMetabaseObject;

    Model: IMsModel;

Begin

    mb := MetabaseClass.Active;

    mObj := mb.ItemByIdNamespace("MODEL", mb.GetObjectKeyById("MS")).Edit;

    Model := mObj As IMsModel;

    Model.TreatNullsAsZeros := True;

    mObj.Save;

End Sub UserProc;


После выполнения пример при расчёте модели пустые значения будут заменяться
 нулями.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
