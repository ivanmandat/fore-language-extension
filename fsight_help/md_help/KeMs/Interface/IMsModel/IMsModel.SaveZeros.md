# IMsModel.SaveZeros

IMsModel.SaveZeros
-


# IMsModel.SaveZeros


## Синтаксис


SaveZeros: Boolean;


## Описание


Свойство SaveZeros определяет,
 сохранять ли нулевые значения, полученные при расчете модели.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Нулевые значения, полученные при расчете модели, будут выгружены в
	 базу данных;


	- False. После расчета
	 модели в базу данных сохраняются только ненулевые значения.


Примечание.
 Свойства IMsModel.SaveZeros и
 [IMsProblemCalculation.SaveZeros](../IMsProblemCalculation/IMsProblemCalculation.SaveZeros.htm) работают
 совместно по условию И. Например,
 если для модели SaveZeros установлено
 в True, а для задачи, рассчитывающую
 данную модель SaveZeros установлено
 в False, то после расчета задачи
 в базу данных сохраняются только ненулевые значения.

Данная возможность позволяет управлять сохранением нулевых значений как
 отдельно для каждой модели, так и для всех моделей, рассчитываемых задачей.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_SAVEZEROS».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    mObj: IMetabaseObject;

    Model: IMsModel;

Begin

    mb := MetabaseClass.Active;

    mObj := mb.ItemByIdNamespace("MODEL_SAVEZEROS", mb.GetObjectKeyById("MS")).Edit;

    Model := mObj As IMsModel;

    Model.SaveZeros := False;

    mObj.Save;

End Sub UserProc;


В результате выполнения примера модель при расчёте будет сохранять в
 базу данных только ненулевые значения.


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
