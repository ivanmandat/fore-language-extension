# TSService.checkCalcFormula

TSService.checkCalcFormula
-


# TSService.checkCalcFormula


## Синтаксис


openRub (wbk: [PP.TS.WbkDocument](../WbkDocument/WbkDocument.htm),
 checkFormula: [Object](dhtmlCommon.chm::/Classes/Object/Object.htm),
 callback: PP.Delegate);


## Параметры


wbk. Задает значение [рабочей
 книги](../Workbook/Workbook.htm);


checkFormula. Метаданные для
 проверки формулы;


callback. Задает обработчик
 окончания выполнения операции.


## Описание


Метод checkCalcFormula отправляет
 запрос на сервер, для проверки корректности формулы, заданной в калькуляторе.


## Комментарии


Ответ приходит в обратную функцию.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»).


// Зададим метаданные формулы
checkFormula =
{
  "formula": {
    "k": 0,
    "kind": "Deterministic",
    "method": {
      "deterministic": {}
    },
    "exprs": {
      "its": {
        "it": [
          {
            "id": "input",
            "innerText": "@0@ * 0.1",
            "k": 0,
            "terms": {

              "its": {
                "it": [
                  {
                    "k": 0,
                    "id": "",
                    "source": {
                      "kind": "VarSource",
                      "varSource": {
                        "kind": "LanerSerie",
                        "serie": {
                          "k": 3
                        }
                      }
                    },
                    "lag": 0
                  }

                ]
              }
            }
          }
        ]
      }
    },
    "calendarLevel": "Quarter"
  }
};
// Создадим обратную функцию, принимающую ответ
var respT;
callB = function(args, resp) {
  valid = resp.Response.GetWbkMdResult.meta.action.checkFormula.valid;
  console.log(valid ? "Формула задана верно" : "Формула задана не верно");
};
// Запросим у сервера правильность формулы
tsService.checkCalcFormula(wbk, checkFormula, callB);

В результате выполнения примера в консоли был выведен ответ о правильности
 заданной формулы.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
