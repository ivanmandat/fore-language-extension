# ParametersDialog.addView

ParametersDialog.addView
-


**


# ParametersDialog.addView


## Синтаксис


addView(value);


## Параметры


*value.* Вкладка, вставляемая в диалог.


## Описание


Метод addView** добавляет вкладку в диалог «Параметры».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm) с наименованием «parametersDialog» (см. «[Пример создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Добавим новую вкладку в диалог:


// Создаём вкладку типа PP.Exp.Ui.ParametersDimensionsView(
var parametersDimensionsView = new PP.Exp.Ui.ParametersDimensionsView({
    Source: eaxAnalyzer,
    Name: "Другие измерения",
    GroupName: "params1"
});
// Добавляем новую вкладку
parametersDialog.addView(parametersDimensionsView);

В результате выполнения примера в диалог «Параметры» будет добавлена вкладка «Другие измерения», реализуемая компонентом PP.Exp.Ui.[ParametersDimensionsView](../ParametersDimensionsView/ParametersDimensionsView.htm).


См. также:


[ParametersDialog](ParametersDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
