# CustomAnalysisWizard.CurrentState

CustomAnalysisWizard.CurrentState
-


**


# CustomAnalysisWizard.CurrentState


## Синтаксис


CurrentState: Object


## Описание


Свойство CurrentState** определяет текущие настройки мастера для валидации данных путём пользовательского анализа временных рядов.


## Комментарии


Значение свойства устанавливается с помощью метода setCurrentState, а возвращается с помощью метода getCurrentState. Из JSON значение задать нельзя.


## Пример


Для выполнения примера необходимо наличие на html-странице экземпляра класса [CustomAnalysisWizard](CustomAnalysisWizard.htm) с наименованием «customAnalysisWizard» (см. [конструктор CustomAnalysisWizard](Constructor_CustomAnalysisWizard.htm)). Определим новые настройки для мастера валидации данных путём пользовательского анализа временных рядов:


// Определим новые настройки для мастера
var state = {
    // Правило применим к наблюдениям
    "calculationType": PP.TS.MsCalculationType.Pointwise,
    "kind": "Simple",
    "transform": {
        // Способ расчёта - поточечный  (вперёд)
        "calculationDirection": PP.TS.Ui.TsSpliceDirection.Forward,
        "calculationType": PP.TS.MsCalculationType.Pointwise,
        // Выражение
        "formulas": {
            "its": {
                "it": [{
                        "k": 0, // Ключ выражения
                        // Используем детерминистический метод исчисления
                        "kind": PP.TS.Ui.TsFormulaKind.Deterministic,
                        "method": {
                            "deterministic": {
                                // Текст выражения
                                "expression": "{Billions of National Currency|Russia|FMB[t]}"
                            }
                        }
                    }
                ]
            }
        }
    }
};
// Применим данные настройки
customAnalysisWizard.setCurrentState(state);

В результате выполнения примера в данном мастере правило валидации стало применяться к наблюдениям, при этом установлен поточечный метод расчёта в направлении вперёд и текст выражения «{Billions of National Currency|Russia|FMB[t]}»:


![](CustomAnalysisWizard_CurrentState.png)


См. также:


[CustomAnalysisWizard](CustomAnalysisWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
