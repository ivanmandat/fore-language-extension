# DashboardVisualizersDelete: Операция

DashboardVisualizersDelete: Операция
-


**


# DashboardVisualizersDelete


## Синтаксис


bool DashboardVisualizersDelete(string mon, DashboardVisualizer
 tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Удаляемый визуализатор.


## Описание


Операция DashboardVisualizersDelete
 удаляет визуализатор в информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers», а в поле tArg.k
 ключ удаляемого визуализатора. Если визуализатор расположен в слайде,
 то также определите поле tArg.parentKey.
 Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если удаление визуализатора завершилось успешно.


## Пример


Ниже приведён пример удаления визуализатора в информационной панели.
 В запросе передаётся моникёр для работы с визуализаторами и ключ удаляемого
 визуализатора. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardVisualizersDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>3</k>  </tArg>
  </DashboardVisualizersDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardVisualizersDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardVisualizersDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardVisualizersDelete" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers",
   "tArg" :
    {
     "k" : "3"
    }
  }
}

### JSON-ответ:


{
 "DashboardVisualizersDeleteResult" : "1"
}


public static bool DashboardVisualizersDelete(string moniker, uint visKey, ulong? parentVisKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardVisualizersDelete()
    {
        tArg = new DashboardVisualizer()
        {
            k = visKey,
            parentKey = parentVisKey
        },
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers"
    };
    // Удаление визуализатора
    var result = somClient.DashboardVisualizersDelete(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
