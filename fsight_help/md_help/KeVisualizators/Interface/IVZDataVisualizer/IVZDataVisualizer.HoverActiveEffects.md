# IVZDataVisualizer.HoverActiveEffects

IVZDataVisualizer.HoverActiveEffects
-


# IVZDataVisualizer.HoverActiveEffects


## Синтаксис


HoverActiveEffects: [IVZEffects](../IVZEffects/IVZEffects.htm);


## Описание


Свойство HoverActiveEffects
 определяет эффекты, которые применяются для элемента, на который была
 наведена мышь.


## Комментарии


Для настройки эффектов используйте свойства интерфейсов [IVZBrushEffect](../IVZBrushEffect/IVZBrushEffect.htm),
 [IVZBorderEffect](../IVZBorderEffect/IVZBorderEffect.htm),
 [IVZAlphaChannelEffect](../IVZAlphaChannelEffect/IVZAlphaChannelEffect.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    EMap: IVZMapChart;

	    BrEffect: IVZBrushEffect;

	    BoEffect: IVZBorderEffect;

	    Color: IGxColor;

	    Feather: IGxPen;

	Begin

	    Metabase := MetabaseClass.Active;

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим карту экспресс-отчёта в качестве визуализатора

	    EMap := EaxAnalyzer.MapChart.MapChart;

	    // Настроим заливку

	    BrEffect := New VZBrushEffect.Create;

	    Color := New GxColor.CreateRGB(255,255,255);

	    BrEffect.BackgroundBrush := New GxSolidBrush.Create(Color);

	    // Настроим границы

	    BoEffect:= New VZBorderEffect.Create;

	    Color := New GxColor.CreateRGB(0,0,0);

	    Feather := New GxPen.CreateSolid(Color,2);

	    BoEffect.BorderPen := Feather;

	    // Определим эффект при наведении мыши на активный элемент

	    EMap.HoverActiveEffects := New VZEffects.Create;

	    EMap.HoverActiveEffects.Add(BrEffect);

	    // Определим эффект при наведении мыши на неактивный элемент

	    EMap.HoverInactiveEffects := New VZEffects.Create;

	    EMap.HoverInactiveEffects.Add(BoEffect);

	    // Определим эффект выделения активного элемента

	    Color := New GxColor.CreateRGB(255,0,0);

	    BrEffect.BackgroundBrush := New GxSolidBrush.Create(Color);

	    EMap.SelectActiveEffects := New VZEffects.Create;

	    EMap.SelectActiveEffects.Add(BrEffect);

	    // Определим эффект выделения неактивного элемента

	    Color := New GxColor.CreateRGB(0,255,0);

	    BrEffect.BackgroundBrush := New GxSolidBrush.Create(Color);

	    EMap.SelectInactiveEffects := New VZEffects.Create;

	    EMap.SelectInactiveEffects.Add(BrEffect);

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера установлены следующие эффекты:


	- при наведении мыши активный регион будет выделяться белой заливкой;


	- при наведении мыши неактивный регион будет выделяться черной
	 границей;


	- при выделении активный регион будет выделяться красной заливкой;


	- при выделении неактивный регион будет выделяться зеленой заливкой.


См. также:


[IVZDataVisualizer](IVZDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
