# IVZHighlightEffect.AOffset

IVZHighlightEffect.AOffset
-


# IVZHighlightEffect.AOffset


## Синтаксис


AOffset: Integer;


## Описание


Свойство AOffset определяет
 уровень прозрачности цвета.


## Комментарии


Допустимые значения находятся в диапазоне [0, 255]. Чем ближе значение
 к 0, тем выше прозрачность.


Для определения интенсивности красной составляющей цвета используйте
 [IVZHighlightEffect.ROffset](IVZHighlightEffect.ROffset.htm).


Для определения интенсивности зеленой составляющей цвета используйте
 [IVZHighlightEffect.GOffset](IVZHighlightEffect.GOffset.htm).


Для определения интенсивности синей составляющей цвета используйте [IVZHighlightEffect.BOffset](IVZHighlightEffect.BOffset.htm).


## Пример


Для использования примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего карту.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Exp: IEaxAnalyzer;

	    Map: IVZMapChart;

	    Effect: IVZHighlightEffect;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Exp := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту

	    Map := Exp.MapChart.MapChart;

	    // Создадим эффект засветления

	    Effect := New VZHighlightEffect.Create;

	    Effect.AOffset := 100;

	    Effect.ROffset := 45;

	    Effect.GOffset := 75;

	    Effect.BOffset := 100;

	    // Создадим объект для работы с эффектами

	    Map.HoverActiveEffects := New VZEffects.Create;

	    // Добавим эффект при наведении на активный элемент карты

	    Map.HoverActiveEffects.Add(Effect);

	    // Обновим и сохраним отчёт

	    Exp.MapChart.Refresh;

	    (Exp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера при наведении на активную территорию карты
 в экспресс-отчёте будет применён эффект засветления.


См. также:


[IVZHighlightEffect](IVZHighlightEffect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
