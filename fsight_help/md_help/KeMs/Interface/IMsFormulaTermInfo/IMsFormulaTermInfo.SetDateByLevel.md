# IMsFormulaTermInfo.SetDateByLevel

IMsFormulaTermInfo.SetDateByLevel
-


# IMsFormulaTermInfo.SetDateByLevel


## Синтаксис


		SetDateByLevel(Value: DateTime; Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm));


## Параметры


Value. Дата, на которую нужно
 зафиксировать значение элемента выражения;


Level. Календарная динамика,
 на которую нужно зафиксировать значение элемента выражения.


## Описание


Метод SetDateByLevel фиксирует
 дату и календарную динамику для элемента выражения.


## Комментарии


Зафиксировать дату и календарную динамику возможно, если элемент выражения
 является значением на заданную дату, то есть свойство [IMsFormulaTermInfo.Type](IMsFormulaTermInfo.Type.htm)
 имеет значение [MsFormulaTermType.Date](../../Enums/MsFormulaTermType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим модель детерминированного
 уравнения с идентификатором MODEL_DATEBYLEVEL. Данная модель должна содержать
 один или более факторов.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MSKey: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Determ: IMsDeterministicTransform;

		    Info: IMsFormulaTermInfo;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MSKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_DATEBYLEVEL", MSKey).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    // Получаем параметры расчета детерминированного уравнения

		    Determ := Transform.FormulaItem(0).Method As IMsDeterministicTransform;

		    Info := Determ.Operands.Item(0).TermInfo;

		    // Задаем тип элемента выражения: значение на определенную дату

		    Info.Type := MsFormulaTermType.Date;

		    // Устанавливаем дату для элемента выражения

		    Info.SetDateByLevel(DateTime.Parse("01.01.2015"), DimCalendarLevel.Year);

		    // Вставляем элемент в уравнение

		    Determ.Expression.AsString := Info.TermInnerText;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для фактора модели будет зафиксирована
 дата: 2015 год.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
