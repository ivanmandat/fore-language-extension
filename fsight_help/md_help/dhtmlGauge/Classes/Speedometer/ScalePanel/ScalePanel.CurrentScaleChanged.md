# ScalePanel.CurrentScaleChanged

ScalePanel.CurrentScaleChanged
-


# ScalePanel.CurrentScaleChanged


## Синтаксис


CurrentScaleChanged: function | PP.Delegate


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CurrentScaleChanged
 наступает при смене текущей шкалы спидометра.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [GaugeMaster](../../../Components/Speedometer/GaugeMaster.htm)
 с наименованием «master» (см. «[Пример
 создания спидометра с мастером](../../../Components/Speedometer/speedometer_wirh_master.htm)»). Добавим обработчик события CurrentScaleChanged:


scaleP.CurrentScaleChanged.add(function (sender, args) {
   console.log("Индекс текущей шкалы: " + args.ScaleIndex)
});
После выполнения примера при смене шкалы спидометра в консоль будет
 выводиться индекс текущей шкалы.


См. также:


[ScalePanel](ScalePanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
