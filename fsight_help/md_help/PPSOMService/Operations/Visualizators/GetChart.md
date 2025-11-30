# GetChart: Операция

GetChart: Операция
-


**


# GetChart


## Синтаксис


GetChartResult GetChart(ChartId tChart, GetChartArg
 tArg)


## Параметры


tChart. Моникёр диаграммы;


tArg. Параметры извлечения
 данных.


## Описание


Операция GetChart извлекает
 данные и метаданные диаграммы.


## Комментарии


Для выполнения операции необходимо в параметре tChart
 указать моникёр диаграммы и в параметре tArg.pattern
 указать шаблон, в соответствии с которыми будет извлекаться информация.
 Моникёр диаграммы строится на базе моникера объекта репозитория, с диаграммой
 которого осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart.
	 Диаграмма экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart. Диаграмма заданного листа экспресс-отчета (если
	 в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart. Диаграмма рабочей книги (если в рабочей книге
	 один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart. Диаграмма заданного листа
	 рабочей книги (если в рабочей книге несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!Sheets!«Ключ листа»!Objects!«Идентификатор диаграммы».
	 Диаграмма, расположенная на листе регламентного отчета.


## Пример


Ниже приведен пример использования операции GetChart
 для получения информации о диаграмме экспресс-отчёта. В запросе передается
 моникёр диаграммы и шаблон для извлечения данных. В ответе приходят запрошенные
 данные.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <GetChart xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tChart
								 xmlns="** **">


										  <id>S1!M!S!E1!Chart</id>


									  </tChart>


								[![](../../minus.gif)](../../#) <tArg
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <pattern>


												  <data>true</data>


												  <decoration>true</decoration>


												  <hiChart>false</hiChart>


												[![](../../minus.gif)](../../#) <asImage>


														  <width>200</width>


														  <height>100</height>


														  <dpi>96</dpi>


														  <format>image/png</format>


													  </asImage>


											  </pattern>


									  </tArg>


							  </GetChart>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						[![](../../minus.gif)](../../#) <GetChartResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[![](../../minus.gif)](../../#) <id xmlns="** **">


										  <id>S1!M!S!E1!Chart</id>


									  </id>


								[![](../../minus.gif)](../../#) <meta
								 xmlns="** **">


										[![](../../minus.gif)](../../#)
										 <md>


												[![](../../minus.gif)](../../#) <data>


														[![](../../minus.gif)](../../#)
														 <Points>


																  <Point
																 Name="**2000A1**"
																 />


																  <Point
																 Name="**2001A1**"
																 />


																  <Point
																 Name="**2002A1**"
																 />


																  <Point
																 Name="**2003A1**"
																 />


																  <Point
																 Name="**2004A1**"
																 />


																  <Point
																 Name="**2005A1**"
																 />


															  </Points>


														  <series
														 Name="**United
														 States**" />


														[![](../../minus.gif)](../../#)
														 <values>


																  <value
																 SerieIndex="**0**"
																 value2="**0.000000,0.000000,0.000000,0.000000,0.000000,0.000000**">1.383864,1.348390,1.348390,1.348390,1.433527,1.589612</value>


															  </values>


														[![](../../minus.gif)](../../#)
														 <IsEditable>


																  <value
																 SerieIndex="**0**">1,1,1,1,1,1</value>


															  </IsEditable>


														[![](../../minus.gif)](../../#)
														 <ToolTips>


																  <ToolTip
																 SP="**0,0**">1,38</ToolTip>


																  <ToolTip
																 SP="**0,1**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,2**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,3**">1,35</ToolTip>


																  <ToolTip
																 SP="**0,4**">1,43</ToolTip>


																  <ToolTip
																 SP="**0,5**">1,59</ToolTip>


															  </ToolTips>


														[![](../../minus.gif)](../../#)
														 <Labels>


																  <Label
																 SP="**0,0**">1,38</Label>


																  <Label
																 SP="**0,1**">1,35</Label>


																  <Label
																 SP="**0,2**">1,35</Label>


																  <Label
																 SP="**0,3**">1,35</Label>


																  <Label
																 SP="**0,4**">1,43</Label>


																  <Label
																 SP="**0,5**">1,59</Label>


															  </Labels>


													  </data>


											  </md>


										  <asImage>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</asImage>


										  <toolTipImageMap><map
										 name="ToolTipImageMap"><area
										 shape="poly" coords="47,46,47,43,47,42,47,41,48,41,49,40,50,40,53,40,54,40,55,41,56,41,56,42,57,43,57,46,47,46"
										 title="1,38" serieName="United
										 States" pointName="2000A1"
										 style="hidefocus:true"
										 nohref="nohref" /><area
										 shape="poly" coords="72,46,72,46,72,45,73,44,73,43,74,43,75,43,78,43,80,43,81,43,81,44,82,45,82,46,82,46,72,46"
										 title="1,35" serieName="United
										 States" pointName="2001A1"
										 style="hidefocus:true"
										 nohref="nohref" /><area
										 shape="poly" coords="97,46,97,46,97,45,98,44,98,43,99,43,100,43,104,43,105,43,106,43,106,44,107,45,107,46,107,46,97,46"
										 title="1,35" serieName="United
										 States" pointName="2002A1"
										 style="hidefocus:true"
										 nohref="nohref" /><area
										 shape="poly" coords="122,46,122,46,122,45,123,44,123,43,124,43,126,43,129,43,130,43,131,43,132,44,132,45,132,46,132,46,122,46"
										 title="1,35" serieName="United
										 States" pointName="2003A1"
										 style="hidefocus:true"
										 nohref="nohref" /><area
										 shape="poly" coords="147,46,147,40,148,39,148,38,149,37,150,37,151,37,154,37,155,37,156,37,157,38,157,39,157,40,157,46,147,46"
										 title="1,43" serieName="United
										 States" pointName="2004A1"
										 style="hidefocus:true"
										 nohref="nohref" /><area
										 shape="poly" coords="173,46,173,28,173,27,173,26,174,25,175,25,176,25,179,25,180,25,181,25,182,26,182,27,182,28,182,46,173,46"
										 title="1,59" serieName="United
										 States" pointName="2005A1"
										 style="hidefocus:true"
										 nohref="nohref" /></map></toolTipImageMap>


									  </meta>


							  </GetChartResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChart" :
  {
   "tChart" :
    {
     "id" : "S1!M!S!E1!Chart"
    },
   "tArg" :
    {
     "pattern" :
      {
       "data" : "true",
       "decoration" : "true",
       "hiChart" : "false",
       "asImage" :
        {
         "width" : "200",
         "height" : "100",
         "dpi" : "96",
         "format" : "image\/png"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetChartResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!E1!Chart"
    },
   "meta" :
    {
     "md" :
      {
       "data" :
        {
         "Points" :
          {
           "Point" :
            [
              {
               "@Name" : "2000A1"
              },
              {
               "@Name" : "2001A1"
              },
              {
               "@Name" : "2002A1"
              },
              {
               "@Name" : "2003A1"
              },
              {
               "@Name" : "2004A1"
              },
              {
               "@Name" : "2005A1"
              }
            ]
          },
         "series" :
          {
           "@Name" : "United States"
          },
         "values" :
          {
           "value" :
            [
              {
               "@SerieIndex" : "0",
               "@value2" : "0.000000,0.000000,0.000000,0.000000,0.000000,0.000000",
               "$" : "1.383864,1.348390,1.348390,1.348390,1.433527,1.589612"
              }
            ]
          },
         "IsEditable" :
          {
           "value" :
            {
             "@SerieIndex" : "0",
             "$" : "1,1,1,1,1,1"
            }
          },
         "ToolTips" :
          {
           "ToolTip" :
            [
              {
               "@SP" : "0,0",
               "$" : "1,38"
              },
              {
               "@SP" : "0,1",
               "$" : "1,35"
              },
              {
               "@SP" : "0,2",
               "$" : "1,35"
              },
              {
               "@SP" : "0,3",
               "$" : "1,35"
              },
              {
               "@SP" : "0,4",
               "$" : "1,43"
              },
              {
               "@SP" : "0,5",
               "$" : "1,59"
              }
            ]
          },
         "Labels" :
          {
           "Label" :
            [
              {
               "@SP" : "0,0",
               "$" : "1,38"
              },
              {
               "@SP" : "0,1",
               "$" : "1,35"
              },
              {
               "@SP" : "0,2",
               "$" : "1,35"
              },
              {
               "@SP" : "0,3",
               "$" : "1,35"
              },
              {
               "@SP" : "0,4",
               "$" : "1,43"
              },
              {
               "@SP" : "0,5",
               "$" : "1,59"
              }
            ]
          }
        }
      },
     "asImage" : "iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfDSURBVHhe7V3NiiRFEJ6XEf8Wzx4EL158AUFw2RXdi0cviuI6wq4IelAE8SD4Bp68+AYiPoSneY1ya3arOzsnM+PL6MzozIqvoaGnOrIi44v4MiKycmauFr6IABHIInBFbIgAEcgjQIIwOohAAQEShOFBBEgQxgAR0CHADKLDjaOcIECCOHE0zdQhQILocOMoJwiQIE4cTTN1CJAgOtw4ygkCJIgTR9NMHQIkiA43jnKCAAnixNE0U4cACaLDjaOcIECCOHE0zdQhQILocOMoJwiQIE4cTTN1CJAgOtw4ygkCJIgTR9NMHQIkiA43jnKCgIogV1f5Yet38fepa07wpZmTI1BNkFKwh8TYPqeuTY4Zp+8IgWqCrNjkMshGnhwpSpnHEeY0dSIEmhNks50ZZKIo4FSzCAxFkOvr64VvYmAVA8i6MBRB4gmvQN3c3PBNDA4x8Pc\/\/y7vfvTl8vbDr5a3HjxeXnrvm8P7zftf315\/58Mvlj\/+\/KsYN2tsIa8mBIl7jtTPmv6DBOHiEC+QT376bXn1\/g\/LG5\/8nn2\/\/vEvy6PPvrscQWLmaYIfYS8J4o8g4UZP789IDKoyCHLjFjIkiE+CLMt\/z8Kn7xtd1EkQ1vdD9XjPA7cvOdb7kyAM\/KECH91s2QVBEPa1aNRZYrHE2rJJiTinD6ifZ5\/jiY90NkJi+PaheG2vgJyrimXQyXCb1x8h4sySIgIW7EcihPfIEQuNyWqClI6ahN+FT9IRUqWIygwyFmF67yqlMoGUQXLZAxmHJIemBEmdwUpdQya2ypAg4xHEroE+LY3KmeBYVh0b8NNr8bwvkkFSK0xIBmlS4REDy9XK6mjD7HpsG2iMIGHgx6VVqTSTYvFwphBdzWsCPVVqSaVZ+uGjzXafJRln18UMAjAmZl+KjXFphTL2wFzT\/fC+RLRYeS+pA9GdWt1zZMs16lK2iL8vzQuNR1UPYnHUBAG9xWpmoWfPOkplTNgobxjEREn5EMELkSnFhylBgKRTLSKzP7+\/HY+Va1FmEGSxyfkE8RWSFaSdJ2SOqMxuCYIGO7piaZ2eI2GrQEjZuV2bRUcpWyCkQoNdI7dbgsTbeFIdK6X0XLAhxJHuXVoRa4ku2X0pO0rzCgmdI7y2xNKQ4m4PIxc2qh6kxL4jEEflqWvS1M5ZYVqUWCX9ceCXVnYpgCRHh5kQJVWumUUWEwsdUimFYC\/hJn3fLYOUgj1Uun1OXZPIcdwSLp2jKfcNYWBJK7lmFctlj1blT0wsKVshGU+ys5UOCYMSCTe7U9mn9TUoDhEhza7VJQiScnArp0vB1YOEuewjBaA2g0jj0JUdlStltNzp38+\/\/Xl57eGPJ79NuD6ADX\/D8N6jX5cHnz653G8USukplzWkcXcfRmIZJCZBzxLLgoSz6ZDKmdrvV\/tLBHn5\/ae3JNneK0HCn1\/54PuxCaJ9kh4fNUGBPWfFQksTCxLOqgP1Eyq34mBxLAepnpo26VY9CAo0IoeSC5VDS7Fz5M4Za2EHgntJpqbS2A61IsGukWlCkJgYqZ9rjT7HkTUOstCzJx2tG+Xc\/WqCGf0TPjX3POuwoqZpr52cRVCVtmBrSCbJWthip6POkz2Dd5tJTx2qDFIHkU7aaqWyC6y9HGfR+XPWUcMSxApQEgQnbm2ZbOXDnnpIkBf\/z8QyY82sq2cwjnhv9wQZ0Smc0zgIkCDj+IIzGRABEmRAp3BK4yBAgozjC85kQASmJkip2W2FNXXgSFpgtc7GSs+tLtz8MSUtth6pA\/e9BVYbSfBZ6SWnJ0jKdAsnUQcedBZY9SLNbggSpl3cdXWS1IHjZYFVXG7hs8MlpyfI5oheK0joBOqQA8vCH1Y+mb4HiVN3j1ROHTIpNgkLrFKLVA+\/H2zCzR9T0mLFog7c9xZYMYPg\/jhIWtS81IE7xgIr9iC4P04ke6bcXDmhnGpxGO2oQ7UHXtM36XUQUtoSgR4Bazn\/6Zv0OMWG9a81kOfqS829dYDF\/UGv+6eedJ+LTzg+nHfvUm7qDJJzcEvHp5zdmogph7feUo519CoVc3p6EMRi14wEATzXknApdan79yRhbjUGoIBENnt64ZbLGj30TU2QXInVAygoMs4QypHkjFveGWqx4oaZqbcf4pKxJVYHO3rclPckAntBYJcZpLVzejedVpsNe7HDCq\/pd7GsmnS0b9ASk3bUIWeB1y5KLAugqAMPXgusSrt7PXqeXZZYrYHKbfXioSNLUoeMUbz7ZlIy1k2L0kTAFwK7zCCtXWiyUiX+gB3tyCNg4RM26UAEWtTV1AE4IhCxwItNOugTC2dQB+iMF2IWeO2CILn9cDbp6YDby0aAld+nL7Hq1h1KE4F6BHbTpMdbgPVQyA0hdciohuejDmXKsw2I1i8zPa0nbnm\/sJTqdXCNOnCPWmC1lVch+Ta9rUvr6UusFCCplQV38V1J6sDRs8AqJkiKKPiMZcn2uU\/W2VQi55SWSqgDR9MCqxJJ8JliktMTBDOTUkRAhwAJosONo5wgQII4cTTN1CFAguhw4ygnCJAgThxNM3UIkCA63DjKCQIkiBNH00wdAiSIDjeOcoIACeLE0TRThwAJosONo5wgQII4cTTN1CFAguhw4ygnCJAgThxNM3UIkCA63DjKCQL\/A91O3jtDpA+EAAAAAElFTkSuQmCC",
     "toolTipImageMap" : "<map name="ToolTipImageMap"><area shape="poly" coords="47,46,47,43,47,42,47,41,48,41,49,40,50,40,53,40,54,40,55,41,56,41,56,42,57,43,57,46,47,46" title="1,38" serieName="United States" pointName="2000A1" style="hidefocus:true" nohref="nohref" \/>A;<area shape="poly" coords="72,46,72,46,72,45,73,44,73,43,74,43,75,43,78,43,80,43,81,43,81,44,82,45,82,46,82,46,72,46" title="1,35" serieName="United States" pointName="2001A1" style="hidefocus:true" nohref="nohref" \/>A;<area shape="poly" coords="97,46,97,46,97,45,98,44,98,43,99,43,100,43,104,43,105,43,106,43,106,44,107,45,107,46,107,46,97,46" title="1,35" serieName="United States" pointName="2002A1" style="hidefocus:true" nohref="nohref" \/>A;<area shape="poly" coords="122,46,122,46,122,45,123,44,123,43,124,43,126,43,129,43,130,43,131,43,132,44,132,45,132,46,132,46,122,46" title="1,35" serieName="United States" pointName="2003A1" style="hidefocus:true" nohref="nohref" \/>A;<area shape="poly" coords="147,46,147,40,148,39,148,38,149,37,150,37,151,37,154,37,155,37,156,37,157,38,157,39,157,40,157,46,147,46" title="1,43" serieName="United States" pointName="2004A1" style="hidefocus:true" nohref="nohref" \/>A;<area shape="poly" coords="173,46,173,28,173,27,173,26,174,25,175,25,176,25,179,25,180,25,181,25,182,26,182,27,182,28,182,46,173,46" title="1,59" serieName="United States" pointName="2005A1" style="hidefocus:true" nohref="nohref" \/>A;<\/map>A;"
    }
  }
}


public static GetChartResult GetChart(EaxId eax)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChart()
    {
        tArg = new GetChartArg()
        {
            pattern = new ChartMdPattern()
            {
                data = true,
                decoration = true,
                hiChart = false,
                asImage = new ImageProperties()
                {
                    format = "image/png",
                    width = 200,
                    height = 100,
                    dpi = 96.0
                }
            }
        },
        tChart = new ChartId() { id = eax.id + "!Chart" }
    };
    // Получаем диаграмму
    var result = somClient.GetChart(tGet);
    Console.WriteLine("Получена диаграмма: "+ result.id.id);
    // Экспортируем диаграмму в файл
    var chart = result.meta;
    MemoryStream fs = new MemoryStream(chart.asImage);
    Bitmap img = new Bitmap(fs);
    img.Save("C:\\Chart.png");
    img.Dispose();
    fs.Dispose();
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
