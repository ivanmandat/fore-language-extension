# ResourceManager.unRegisterControl

ResourceManager.unRegisterControl
-


# ResourceManager.unRegisterControl


## Синтаксис


unRegisterControl(control: [PP.Ui.Control](dhtmlUi.chm::/Classes/control/control.htm));


## Параметры


control. Элемент управления.


## Описание


Метод unRegisterControl исключает
 элемент управления из списка зарегистрированных элементов управления в
 менеджере ресурсов.


## Пример


Перед выполнением примера необходимо запустить сценарий, приведённый
 на странице описания метода [ResourceManager.registerControl](ResourceManager.registerControl.htm).
 Исключим кнопку из списка элементов управления, зарегистрированных в менеджере
 ресурсов, а затем удалим её:


// Исключим кнопку из списка зарегистрированных элементов управления менеджера ресурсов
PP.resourceManager.unRegisterControl(button);
if (!PP.resourceManager.isControlRegistered(button)) {
    console.log("Кнопка исключена из списка зарегистрированных элементов в менеджере ресурсов");
    // Удалим кнопку
    button.dispose();
};
В результате выполнения примера в консоли браузера было выведено сообщение
 о том, что кнопка исключена из списка зарегистрированных элементов в менеджере
 ресурсов. Затем данная кнопка была удалена со страницы.


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
