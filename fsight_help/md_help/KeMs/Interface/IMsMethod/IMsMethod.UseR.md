# IMsMethod.UseR

IMsMethod.UseR
-


# IMsMethod.UseR


## Синтаксис


UseR: Boolean;


## Описание


Свойство UseR определяет,
 используется ли при расчете метода подключение к R.


## Комментарии


Для получения информации о том, возможен ли расчет метода с помощью
 R, используйте свойство [IMsMethod.SupportsR](IMsMethod.SupportsR.htm).


Допустимые значения:


	- True. Метод рассчитывается
	 с помощью R. Для этого в репозитории должна быть настроена интеграция
	 с R. Подробнее о том, как можно настроить интеграцию вы можете узнать
	 в разделе «[Как
	 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)»;


	- False. Метод рассчитывается
	 с помощью «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим модель с идентификатором
 «MODEL_R». В репозитории должна быть настроена интеграция с R. Подробнее
 о том, как можно настроить интеграцию вы можете узнать в разделе «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    msKey: Integer;

    modelObj: IMetabaseObject;

    transf: IMsFormulaTransform;

    formula: IMsFormula;

    method: IMsMethod;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    msKey := mb.GetObjectKeyById("MS");

    // Получаем модель

    modelObj := mb.ItemByIdNamespace("MODEL_R", msKey).Edit;

    // Получаем параметры расчета модели

    transf := (modelObj As IMsModel).Transform;

    formula := transf.FormulaItem(0);

    method := formula.Method;

    // Проверяем, доступен ли расчет модели с помощью пакета R

    If method.SupportsR

        Then

            method.UseR := True;

            Debug.WriteLine("При расчете модели будет использоваться подключение R");

        Else

            Debug.WriteLine("Модель не поддерживает расчет с помощью R");

    End If;

    // Сохраняем изменения

    modelObj.Save;

End Sub UserProc;


В результате выполнения примера модель будет рассчитана с помощью R.
 Если модель не поддерживает расчет с помощью R, то в окно консоли будет
 выведено соответствующее сообщение.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
