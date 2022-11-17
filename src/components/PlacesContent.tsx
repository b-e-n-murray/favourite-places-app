import PlaceEntry from "./Places";

function PlaceContent(): JSX.Element {
  return (
    <main>
      <PlaceEntry
        entrynum={1}
        title={"Porto Santo"}
        image={
          "https://www.travelsupermarket.com/sonic/image/content/why-visit-porto-santo/porto-santo-beach.jpg"
        }
        description={
          "A beautiful island off of Portugal with gorgeous beaches."
        }
        mapslink={
          "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84406-Okinawa.jpg"
        }
      />
      <PlaceEntry
        entrynum={2}
        title={"Okinawa"}
        image={
          "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/84000/84406-Okinawa.jpg"
        }
        description={
          "Description: I've never been, but would love to go and see its rich history and culture. It's also the birthplace of Karate."
        }
        mapslink={
          "https://www.google.com/maps/place/Okinawa,+Japan/@25.6770863,117.8096098,6z/data=!3m1!4b1!4m5!3m4!1s0x34f57062eeab5be7:0x35bb617286fdd1ef!8m2!3d26.1201911!4d127.7025012?hl=en"
        }
      />
      <PlaceEntry
        entrynum={3}
        title={"The Gym"}
        image={
          "https://www.fitnessfirst.co.uk/media/cm2jlwu2/fitnessfirst_interiors-bakerst_147_web.jpg?width=540&height=405&quality=80&rnd=132869859581330000"
        }
        description={
          "My home-from-home, amazing for de-stressing and pushing yourself."
        }
        mapslink={"#"}
      />
      <PlaceEntry
        entrynum={4}
        title={"Bali"}
        image={
          "https://www.google.com/maps/place/Bali,+Indonesia/@-8.4550727,114.5110915,9z/data=!3m1!4b1!4m5!3m4!1s0x2dd141d3e8100fa1:0x24910fb14b24e690!8m2!3d-8.4095178!4d115.188916?hl=en"
        }
        description={
          "I've never been, but would love to experience beautiful sights, such as the above."
        }
        mapslink={
          "https://www.google.com/maps/place/Bali,+Indonesia/@-8.4537137,114.5110348,9z/data=!3m1!4b1!4m5!3m4!1s0x2dd141d3e8100fa1:0x24910fb14b24e690!8m2!3d-8.4095178!4d115.188916?hl=en"
        }
      />
    </main>
  );
}

export default PlaceContent;
